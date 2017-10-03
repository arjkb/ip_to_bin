# ip_to_bin

Simple stupid python script to convert an ip address in dotted decimal notation to equivalent binary notation.


#### USAGE
It's as straightforward as it can get:
```
python ip_to_bin.py <ADDRESS>
```
Replace `ADDRESS` above with the ip address in dotted decimal format.

##### Example
```
$ python ip_to_bin.py 192.168.21.32
11000000.10101000.00010101.00100000
```

To display a help message:

```
python ip_to_bin.py --help
```

**NOTE: The program at the moment does not validate the input. Will be fixed eventually.**
