"use strict";
const Constants = require ("../../../Constants");
const BladetuskBoarBase = require("../setJOU/BladetuskBoar");

class BladetuskBoar extends BladetuskBoarBase {
  constructor (game) {
    super(game, "Bladetusk Boar", "Zendikar", "ZEN");
  }
}

module.exports = BladetuskBoar;
