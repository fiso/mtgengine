"use strict";
const Constants = require ("../../../Constants");
const ClifftopRetreatBase = require("../setDOM/ClifftopRetreat");

class ClifftopRetreat extends ClifftopRetreatBase {
  constructor (game) {
    super(game, "Clifftop Retreat", "Innistrad", "ISD");
  }
}

module.exports = ClifftopRetreat;
