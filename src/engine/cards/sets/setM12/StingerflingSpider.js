"use strict";
const Constants = require ("../../../Constants");
const StingerflingSpiderBase = require("../setC15/StingerflingSpider");

class StingerflingSpider extends StingerflingSpiderBase {
  constructor (game) {
    super(game, "Stingerfling Spider", "Magic 2012", "M12");
  }
}

module.exports = StingerflingSpider;
