"use strict";
const Constants = require ("../../../Constants");
const KjeldoranSkycaptainBase = require("../set5ED/KjeldoranSkycaptain");

class KjeldoranSkycaptain extends KjeldoranSkycaptainBase {
  constructor(game) {
    super(game, "Kjeldoran Skycaptain", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranSkycaptain;
