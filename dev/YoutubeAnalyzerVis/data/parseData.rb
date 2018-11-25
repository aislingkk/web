#!/bin/ruby
require 'json'

data  = {}
open('comments.json') do |f|
  data = JSON.parse(f.read())
end





res=JSON.generate({a:2})

open('result.json','w') do |f|
 f.write(res)
end