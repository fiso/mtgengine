"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterRealmofPreservationBase = require("../set5ED/GreaterRealmofPreservation.js");

class GreaterRealmofPreservation extends GreaterRealmofPreservationBase {
  constructor(game) {
    super(game, "Greater Realm of Preservation", "Legends", "LEG");
  }
}

module.exports = GreaterRealmofPreservation;
