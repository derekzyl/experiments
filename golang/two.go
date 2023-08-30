package main

import "fmt"

func two() {
	first := 100
	second := first
	first++
	fmt.Println("First:", first)
	fmt.Println("Second:", second)
}
