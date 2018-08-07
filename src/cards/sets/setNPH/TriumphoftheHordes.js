"use strict";
const Constants = require ("../../../Constants");
const TriumphoftheHordesBase = require("../setTD2/TriumphoftheHordes");

class TriumphoftheHordes extends TriumphoftheHordesBase {
  constructor (game) {
    super(game, "Triumph of the Hordes", "New Phyrexia", "NPH");
  }
}

module.exports = TriumphoftheHordes;
