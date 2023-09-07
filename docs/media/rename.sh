
i=0

for file in *.jpg


do
  echo $file $i
  mv "$file" "CANARYWARP${i}.png"
  # mv "$file" "${file/_h.png/_half.png}"
  i=$(expr $i + 1)
done