import argparse

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("ip", help="ip address to convert", type=str)
    args = parser.parse_args()
    print(args.ip)


if __name__ == '__main__':
    main()
