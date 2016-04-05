"use strict";
const Constants = require ("../../../Constants");
const AjaniVengeantBase = require("../setDDH/AjaniVengeant");

class AjaniVengeant extends AjaniVengeantBase {
  constructor(game) {
    super(game, "Ajani Vengeant", "Launch Parties", "pLPA");
  }
}

module.exports = AjaniVengeant;
