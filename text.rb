 require 'json'

lines = File.read("gender.txt")

# data = lines.to_json
# data = JSON.parse(lines)

data = JSON.parse(lines)


datapoint = data['data']['datapoint']
length  = data['data']['datapoint'].size

i =0

while i < length do
	temp = data['data']['datapoint'][i]
	puts temp 
	puts '\n'
	i +=1
	
end