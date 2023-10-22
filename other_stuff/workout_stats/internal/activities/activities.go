package activities

import "github.com/rreubenreyes/workout_stats/internal/strava"

// Activity is an internal representation of a training activity. It is represented
// approximately as a tagged union.
//
// The `Kind` field discriminates the kind of activity details contained within the struct.
// Readers of the struct are expected to read the `Kind` field to determine which accessor method
// to use to further read data from the struct.
type Activity struct {
	Kind                  string
	weightTrainingDetails []WeightTrainingSet
	rockClimbingDetails   []RockClimbingAttempt
}

func (a Activity) WeightTrainingDetails() []WeightTrainingSet {
	return a.weightTrainingDetails
}

func (a Activity) RockClimbingDetails() []RockClimbingAttempt {
	return a.rockClimbingDetails
}

// WeightTraining* should be represented as its own table
type WeightTrainingSet struct {
	Name  string
	Notes string

	Weight int
	Reps   int
	RPE    float64
}

// RockClimbing* should be represented as its own table
type RockClimbingAttempt struct {
	Discipline    string
	Grade         string
	GradingSystem string
	Sent          bool
}

// TODO: move the following three functions to business code
// TODO: Implement
func parseWeightTrainingSets(s string) []WeightTrainingSet {
	w := []WeightTrainingSet{}
	return w
}

// TODO: Implement
func parseRockClimbingAttempts(s string) []RockClimbingAttempt {
	r := []RockClimbingAttempt{}
	return r
}

// TODO: Implement
func FromStrava(d strava.DetailedActivity) {
	// inspect the SportType
	// call correct parser based on sport type
	// return all parsed values
}
