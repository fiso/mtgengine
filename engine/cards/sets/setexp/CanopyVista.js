"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CanopyVistaBase = require("../setBFZ/CanopyVista.js");

class CanopyVista extends CanopyVistaBase {
  constructor(game) {
    super(game, "Canopy Vista", "Zendikar Expedition", "EXP");
  }
}

module.exports = CanopyVista;
