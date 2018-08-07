"use strict";
const Constants = require ("../../../Constants");
const ExplosiveApparatusBase = require("../setM19/ExplosiveApparatus");

class ExplosiveApparatus extends ExplosiveApparatusBase {
  constructor (game) {
    super(game, "Explosive Apparatus", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ExplosiveApparatus;
