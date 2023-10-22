package db

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/rds/auth"
)

// Connect connects to
func Connect(name string, host string, port string, user string, awsRegion string) {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		panic("configuration error: " + err.Error())
	}

	endpoint := fmt.Sprintf("%s:%s", host, port)
	token, err := auth.BuildAuthToken(
		context.TODO(),
		endpoint,
		awsRegion,
		user,
		cfg.Credentials,
	)
	if err != nil {
		panic("failed to create authentication token: " + err.Error())
	}

	// TODO: construct connection string somehow

	db, err := sql.Open("postgres", "")
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}
}
