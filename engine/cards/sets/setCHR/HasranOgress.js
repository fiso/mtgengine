"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HasranOgressBase = require("../setARN/HasranOgress.js");

class HasranOgress extends HasranOgressBase {
  constructor(game) {
    super(game, "Hasran Ogress", "Chronicles", "CHR");
  }
}

module.exports = HasranOgress;
