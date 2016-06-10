"use strict";
const Constants = require ("../../../Constants");
const RestlessApparitionBase = require("../setEVE/RestlessApparition");

class RestlessApparition extends RestlessApparitionBase {
  constructor (game) {
    super(game, "Restless Apparition", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RestlessApparition;
