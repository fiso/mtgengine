"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MakeshiftMaulerBase = require("../setDDQ/MakeshiftMauler.js");

class MakeshiftMauler extends MakeshiftMaulerBase {
  constructor(game) {
    super(game, "Makeshift Mauler", "Innistrad", "ISD");
  }
}

module.exports = MakeshiftMauler;
