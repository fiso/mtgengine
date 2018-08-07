"use strict";
const Constants = require ("../../../Constants");
const AjaniVengeantBase = require("../setDDH/AjaniVengeant");

class AjaniVengeant extends AjaniVengeantBase {
  constructor (game) {
    super(game, "Ajani Vengeant", "Magic Online Promos", "PRM");
  }
}

module.exports = AjaniVengeant;
