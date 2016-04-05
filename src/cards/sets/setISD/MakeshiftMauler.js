"use strict";
const Constants = require ("../../../Constants");
const MakeshiftMaulerBase = require("../setDDQ/MakeshiftMauler");

class MakeshiftMauler extends MakeshiftMaulerBase {
  constructor(game) {
    super(game, "Makeshift Mauler", "Innistrad", "ISD");
  }
}

module.exports = MakeshiftMauler;
