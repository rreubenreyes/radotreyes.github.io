package strava

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type SummaryActivity struct {
	Id string `json:"id,omitempty"`
}

type DetailedActivity struct {
	Id          string `json:"id,omitempty"`
	Name        string `json:"name,omitempty"`
	SportType   string `json:"sport_type,omitempty"`
	Description string `json:"description,omitempty"`
}

type Client struct {
	accessToken string
	url         string
}

func (c Client) ListActivities() []SummaryActivity {
	url := fmt.Sprintf("%s/v3/athlete/activities", c.url)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		// TODO: throw here
		panic(err)
	}
	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", c.accessToken))
	req.Header.Add("Accept", "application/json")
	res, err := http.DefaultClient.Do(req)
	if err != nil {
		// TODO: throw here
		panic(err)
	}

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	var a []SummaryActivity
	err = json.Unmarshal(body, &a)
	if err != nil {
		// TODO: throw here
		panic(err)
	}

	return a
}

func (c Client) GetActivity(id string) DetailedActivity {
	url := fmt.Sprintf("%s/v3/athlete/activities/%s", c.url, id)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		// TODO: throw here
		panic(err)
	}
	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", c.accessToken))
	req.Header.Add("Accept", "application/json")
	res, err := http.DefaultClient.Do(req)
	if err != nil {
		// TODO: throw here
		panic(err)
	}

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	var a DetailedActivity
	err = json.Unmarshal(body, &a)
	if err != nil {
		// TODO: throw here
		panic(err)
	}

	return a
}
