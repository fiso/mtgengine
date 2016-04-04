"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjaniVengeantBase = require("../setDDH/AjaniVengeant.js");

class AjaniVengeant extends AjaniVengeantBase {
  constructor(game) {
    super(game, "Ajani Vengeant", "Launch Parties", "pLPA");
  }
}

module.exports = AjaniVengeant;
