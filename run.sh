# MIRO Express auto run shell script
# provider : Geektree0101
# copyright(C) 2017 MIRO Internet of things team

# Install packages
# NOTE : automatically update and install node module using shell script
npm install

# Run
# NOTE : load application start program in binary folder(bin)
DEBUG=MIRO-Express:* ./bin/www