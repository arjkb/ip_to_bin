import argparse

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("ip", help="ip address to convert", type=str)
    args = parser.parse_args()
    ip = args.ip
    octets = list(map(int, ip.split('.')))
    print("({})d = ({:08b}.{:08b}.{:08b}.{:08b})b".format(ip,
                                                octets[0],
                                                octets[1],
                                                octets[2],
                                                octets[3]))


if __name__ == '__main__':
    main()
