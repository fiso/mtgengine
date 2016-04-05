"use strict";
const Constants = require ("../../../Constants");
const NecropotenceBase = require("../setDKM/Necropotence");

class Necropotence extends NecropotenceBase {
  constructor(game) {
    super(game, "Necropotence", "Fifth Edition", "5ED");
  }
}

module.exports = Necropotence;
