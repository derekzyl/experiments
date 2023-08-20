#!/bin/python3

import math
import os
import random
import re
import sys


def log(descriptor):
    def decorator(func):
        def wrapper(*args, **kwargs):
            log_line = f"LOG: {func.__name__}{args}\n"
            descriptor.write(log_line)
            descriptor.flush()
            return func(*args, **kwargs)

        return wrapper

    return decorator


if __name__ == "__main__":
    fptr = open("output/d.txt", "w")

    @log(fptr)
    def my_max(a, b, c):
        return max(a, b, c)

    @log(fptr)
    def my_min(a, b):
        return min(a, b)

    @log(fptr)
    def my_sum(*args):
        return sum(args)

    q = int(input())
    for _ in range(q):
        line = input().split()
        f_name, params = line[0], map(int, line[1:])
        if f_name == "my_min":
            res = my_min(*params)
            fptr.write(f"{res}\n")
        elif f_name == "my_max":
            res = my_max(*params)
            fptr.write(f"{res}\n")
        elif f_name == "my_sum":
            res = my_sum(*params)
            fptr.write(f"{res}\n")
        else:
            raise ValueError("Unknown function name %s" % f_name)
    fptr.close()
