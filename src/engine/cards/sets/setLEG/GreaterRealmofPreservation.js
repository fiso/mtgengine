"use strict";
const Constants = require ("../../../Constants");
const GreaterRealmofPreservationBase = require("../setMED/GreaterRealmofPreservation");

class GreaterRealmofPreservation extends GreaterRealmofPreservationBase {
  constructor (game) {
    super(game, "Greater Realm of Preservation", "Legends", "LEG");
  }
}

module.exports = GreaterRealmofPreservation;
