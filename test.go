package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	fib, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println(err)
	}

	a := 0
	b := 1
	fmt.Println(1)
	for i := 0; i < fib-1; i++ {
		fmt.Println(a + b)
		temp := a + b
		a = b
		b = temp
	}

}
