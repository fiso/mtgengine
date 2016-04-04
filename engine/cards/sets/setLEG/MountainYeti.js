"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainYetiBase = require("../setCHR/MountainYeti.js");

class MountainYeti extends MountainYetiBase {
  constructor(game) {
    super(game, "Mountain Yeti", "Legends", "LEG");
  }
}

module.exports = MountainYeti;
