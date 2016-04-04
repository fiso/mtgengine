"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KazanduTuskcallerBase = require("../setC13/KazanduTuskcaller.js");

class KazanduTuskcaller extends KazanduTuskcallerBase {
  constructor(game) {
    super(game, "Kazandu Tuskcaller", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KazanduTuskcaller;
