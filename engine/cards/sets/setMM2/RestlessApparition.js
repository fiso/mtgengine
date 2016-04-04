"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RestlessApparitionBase = require("../setEVE/RestlessApparition.js");

class RestlessApparition extends RestlessApparitionBase {
  constructor(game) {
    super(game, "Restless Apparition", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RestlessApparition;
