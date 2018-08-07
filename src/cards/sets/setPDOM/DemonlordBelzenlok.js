"use strict";
const Constants = require ("../../../Constants");
const DemonlordBelzenlokBase = require("../setDOM/DemonlordBelzenlok");

class DemonlordBelzenlok extends DemonlordBelzenlokBase {
  constructor (game) {
    super(game, "Demonlord Belzenlok", "Dominaria Promos", "PDOM");
  }
}

module.exports = DemonlordBelzenlok;
