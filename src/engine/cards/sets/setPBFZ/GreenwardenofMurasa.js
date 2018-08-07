"use strict";
const Constants = require ("../../../Constants");
const GreenwardenofMurasaBase = require("../setBFZ/GreenwardenofMurasa");

class GreenwardenofMurasa extends GreenwardenofMurasaBase {
  constructor (game) {
    super(game, "Greenwarden of Murasa", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = GreenwardenofMurasa;
