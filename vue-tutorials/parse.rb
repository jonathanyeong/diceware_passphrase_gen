new_csv = File.open("wordlist.csv", "w")
new_csv.write("key,value\n")
File.open("wordlist.txt", "r") do |f|

  f.each_line do |line|
    puts "line is: #{line}"
    l = line.split(" ")
    puts "new line is: #{l.join(',')}"
    new_csv.write("#{l.join(',')}\n")
  end
end

new_csv.close