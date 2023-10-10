import csv

# Specify the serial number you want to find
target_serial_number = str(input("please enter your reg. no."))

with open('scripts/n.csv', mode='r') as file:
    csv_reader = csv.reader(file)
    
    # Initialize variables to store the found row and a flag to check if the serial number was found
    found_row = None
    serial_number_found = False
    
    for row in csv_reader:
        # Assuming the serial number is in the first column (index 0)
        serial_number = row[1]
        
        # Check if the current row's serial number matches the target serial number
        if serial_number == target_serial_number:
            found_row = row
            serial_number_found = True
            break  # No need to continue searching if found
    
    if serial_number_found:
        # You found the row, and it is stored in the found_row variable
        print("Serial number found:")
        print(found_row)
    else:
        print("Serial number not found in the CSV file.")
