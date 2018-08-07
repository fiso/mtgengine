"use strict";
const Constants = require ("../../../Constants");
const RestlessApparitionBase = require("../setMM2/RestlessApparition");

class RestlessApparition extends RestlessApparitionBase {
  constructor (game) {
    super(game, "Restless Apparition", "Eventide", "EVE");
  }
}

module.exports = RestlessApparition;
