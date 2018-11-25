#!/bin/ruby
require 'json'

data  = {}
open('comments.json') do |f|
  data = JSON.parse(f.read())
end
# emotion -> video -> comment
result = {}
count = 0
data.each do |k,v|
  res = v['res']
  document_tone = res["document_tone"]
  likeCount = v["likeCount"].to_i
  comment = v["text"]
  name = v['name']
  if document_tone['tones'].length > 0
    tone = document_tone['tones'].sort_by{|t| -t['score'] }[0]["tone_name"]
    result[tone] = result[tone] || {}
    result[tone]["$count"] = result[tone]["$count"] || 0
    result[tone]["$count"] += 1
    count += 1
    result[tone][name] = result[tone][name] || {}
    result[tone][name]["$count"] = result[tone]["$count"] || 0
    result[tone][name]["$count"] += 1
    result[tone][name][comment] = {:$count => likeCount }
  end
end




res=JSON.generate({:emotion=>result,:$count => count})

open('result.json','w') do |f|
 f.write(res)
end