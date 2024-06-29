## site_screenshotter

This is a throwaway tool intended to take screenshots of product websites. 

If you want to take a screenshot of a particular site, run `node index.js <url> <product>` and it will save a screenshot
locally to a `screenshots` directory.

If you want to take screenshots of a bunch of sites, add a `product_list.csv` file with a product column and a url
column, like so:

|                                |              |
|--------------------------------|--------------|
| Sagetap                        | sagetap.io   |
| OpenTofu                       | opentofu.org |
| Electronic Frontier Foundation | eff.org      |

It will run a bash script that runs that initial command for each row in the CSV file, saving all the screenshots to 
the same `screenshots` directory.
