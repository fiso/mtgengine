"use strict";
const Constants = require ("../../../Constants");
const RelentlessSkaabsBase = require("../setDDQ/RelentlessSkaabs");

class RelentlessSkaabs extends RelentlessSkaabsBase {
  constructor (game) {
    super(game, "Relentless Skaabs", "Dark Ascension", "DKA");
  }
}

module.exports = RelentlessSkaabs;
