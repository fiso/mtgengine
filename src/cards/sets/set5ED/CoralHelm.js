"use strict";
const Constants = require ("../../../Constants");
const CoralHelmBase = require("../setATQ/CoralHelm");

class CoralHelm extends CoralHelmBase {
  constructor (game) {
    super(game, "Coral Helm", "Fifth Edition", "5ED");
  }
}

module.exports = CoralHelm;
