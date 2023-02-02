# DATA

## DATA LAYER

- Phone number
- isCalling (boolean)

## DATA MODIFICATIONS

- Add digit to phone number
- Clear phone number
- Set isCalling to true
- Set isCalling to false

# COMPONENTS

## CONTEXT

- Contains the isCalling
- Contains the phone number

- Contains the function to add a number
- Contains the function to clear the whole number
- Contains the function to call
- Contains the function to hang up

## APP

## INFO

- Shows the 'is calling' status

## DISPLAY

- Receives the phone number
- Shows the phone number

## ACTIONS

- Receives the isCalling
- Depending the status of isCalling shows an action or another

### ACTION

- One of the 'Action' components receives the function to call
- One of the 'Action' components receives the function to hung up

## KEYBOARD

- Receives isCalling (para desactivar las teclas)

### KEY

- Receives the function to add a number
- Recieves the function to clear the whole number
