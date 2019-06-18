import json, glob, os
#------------------------------------------------------------------------------
target           = "wavetables.js" # where to write to
var_name         = "tables"        # js variable name 
var_type         = "var"           # js variable type
path_to_tables   = "./tables/"     # path to Pd-written arrays dir
tables_extension = "*.txt"         # extension of Pd-written arrays
#------------------------------------------------------------------------------
data={} # our temporary json object
#------------------------------------------------------------------------------
def populate(file, data):
	"""
	@brief      { Populate a json object with Pure Data written arrays }

	@param      file  The Pure Data written array
	@param      data  The data object to write to

	@return     { no return value }
	"""
	base=os.path.basename(file) # remove path
	name=os.path.splitext(base)[0] # remove extension
	with open(file,"r") as f:
		vals=[] # store as float array
		for line in f:
			# get rid of newline character
			# convert string to float
			vals.append(float(line[:-1]))
		# populate the data object
		# with the float array of name == to file basename
		data.update({name:vals})
#------------------------------------------------------------------------------
# get all files in given path
for file in glob.glob(path_to_tables+tables_extension):
	print(file) # notify which file we are working on
	populate(file, data) # fill our json object
#------------------------------------------------------------------------------
with open(target,"w") as f:
	#  declare a javascript-type variable
	f.write(var_type+" "+var_name+" = ")
	#  print the json object to initialize it
	f.write(json.dumps(data,indent=4))