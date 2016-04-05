"use strict";
const Constants = require ("../../../Constants");
const AjaniVengeantBase = require("../setDDH/AjaniVengeant");

class AjaniVengeant extends AjaniVengeantBase {
  constructor(game) {
    super(game, "Ajani Vengeant", "Shards of Alara", "ALA");
  }
}

module.exports = AjaniVengeant;
