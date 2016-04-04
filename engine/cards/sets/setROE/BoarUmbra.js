"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoarUmbraBase = require("../setPC2/BoarUmbra.js");

class BoarUmbra extends BoarUmbraBase {
  constructor(game) {
    super(game, "Boar Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BoarUmbra;
