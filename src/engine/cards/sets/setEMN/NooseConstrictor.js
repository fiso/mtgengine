"use strict";
const Constants = require ("../../../Constants");
const NooseConstrictorBase = require("../setF17/NooseConstrictor");

class NooseConstrictor extends NooseConstrictorBase {
  constructor (game) {
    super(game, "Noose Constrictor", "Eldritch Moon", "EMN");
  }
}

module.exports = NooseConstrictor;
