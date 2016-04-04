"use strict";
const Constants = require ("../../../Constants");
const HasranOgressBase = require("../setARN/HasranOgress");

class HasranOgress extends HasranOgressBase {
  constructor(game) {
    super(game, "Hasran Ogress", "Masters Edition IV", "ME4");
  }
}

module.exports = HasranOgress;
