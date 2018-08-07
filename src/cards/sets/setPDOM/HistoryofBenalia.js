"use strict";
const Constants = require ("../../../Constants");
const HistoryofBenaliaBase = require("../setDOM/HistoryofBenalia");

class HistoryofBenalia extends HistoryofBenaliaBase {
  constructor (game) {
    super(game, "History of Benalia", "Dominaria Promos", "PDOM");
  }
}

module.exports = HistoryofBenalia;
