"use strict";
const Constants = require ("../../../Constants");
const KjeldoranSkycaptainBase = require("../setME2/KjeldoranSkycaptain");

class KjeldoranSkycaptain extends KjeldoranSkycaptainBase {
  constructor (game) {
    super(game, "Kjeldoran Skycaptain", "Fifth Edition", "5ED");
  }
}

module.exports = KjeldoranSkycaptain;
