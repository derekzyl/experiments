package main

import (
	"fmt"
	"sort"
)

func main() {
	for i := 0; i < 5; i++ {
		hello(i)
	}

	first := 100
	second := &first
	third := &second
	fourth := &third

	fmt.Println(first)
	fmt.Println(*second)
	fmt.Println(**third)
	fmt.Println(***fourth)

	names := []string{"first", "second", "third", "fourth"}
	// n := make([]string, len(names))

	// n = names
	sort.Strings(names[:])

}

func hello(num int) {
	fmt.Println(num)
}

//create a function that takes a number and increases it by one
