"use strict";
const Constants = require ("../../../Constants");
const BeckonApparitionBase = require("../setGTC/BeckonApparition");

class BeckonApparition extends BeckonApparitionBase {
  constructor (game) {
    super(game, "Beckon Apparition", "Eventide", "EVE");
  }
}

module.exports = BeckonApparition;
