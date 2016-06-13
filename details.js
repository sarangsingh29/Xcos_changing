










































































	
	
	
				blockElementName: "CONST_m",
				blockName: "CONST_m",
			details.exprs = new ScilabString([sci2exp(this.c)]);
			details.realParameters = new ScilabDouble();
			this.c = [1];
			this.x.exprs = new ScilabString([sci2exp(this.c)]);
			this.x.realParameters = new ScilabDouble();
			var dec = new mxCodec();
			var details = dec.decode(arguments[1]);
		blockElementName: "CLOCK_c",
		blockName: "CLOCK_c",
		exprs : this.x.graphics.exprs
		integerParameters : this.x.model.ipar,
		realParameters : this.x.model.rpar,
	// changed
	// changed
	block.graphics.in_implicit = new ScilabString(["E"]);
	block.graphics.in_label = new ScilabString([""]);
	block.graphics.out_label = new ScilabString([""]);
	model.outtyp = new ScilabDouble();
	model.outtyp = new ScilabDouble(); // changed
	model.outtyp = new ScilabDouble(); // changed
	model.outtyp = new ScilabDouble(); //changed
	return this.ScilabMList;
	this.blockName = options.blockName || "";
	this.ScilabList.scilabClass = "ScilabList";
	}
	}
    
    
    
    
    
       
        
        
        
        
        
        
        
        
        		blockElementName: "ANDBLK",
        		blockElementName: "CFSCOPE",
        		blockName: "ANDBLK",
        		blockName: "CFSCOPE",
        		exprs : this.x.graphics.exprs
        		exprs : this.x.graphics.exprs
        		exprs : this.x.graphics.exprs
        		integerParameters : this.x.model.ipar,
        		integerParameters : this.x.model.ipar,
        		integerParameters : this.x.model.ipar,
        		realParameters : this.x.model.rpar,
        		realParameters : this.x.model.rpar,
        		realParameters : this.x.model.rpar,
        	andlog.doc = list(new ScilabString([cnt++]));
        	andlog.model.uid = new ScilabString([cnt]);
        	diagram.objs.push(input_port2);
        	ifthel.doc = list(new ScilabString([cnt++]));
        	ifthel.model.uid = new ScilabString([cnt]);
        	input_port1.doc = list(new ScilabString([cnt++]));
        	input_port1.model.uid = new ScilabString([cnt]);
        	input_port2.doc = list(new ScilabString([cnt++]));
        	input_port2.model.uid = new ScilabString([cnt]);
        	output_port.doc = list(new ScilabString([cnt++]));
        	output_port.model.uid = new ScilabString([cnt]);
        	split.doc = list(new ScilabString([cnt++]));
        	split.model.uid = new ScilabString([cnt]);
          
            
            
                blockElementName: "CMSCOPE",
                blockName: "CMSCOPE",
                blockType: "d",
                blockType: "h",
                ct: new ScilabDouble([1, 1]),
                ct: new ScilabDouble([5, -1]),
                ct: new ScilabDouble([5, -1]),
                ct: new ScilabDouble([5, -1]),
                ct: new ScilabDouble([5, -1]),
                ct: new ScilabDouble([5, -1]),
                dependsOnU: "1",
                dependsOnU: "1",
                exprs : this.x.graphics.exprs
                from: new ScilabDouble([1, 1, 0]),
                from: new ScilabDouble([2, 1, 0]),
                from: new ScilabDouble([4, 1, 0]),
                from: new ScilabDouble([5, 1, 0]),
                from: new ScilabDouble([6, 1, 0]),
                from: new ScilabDouble([6, 2, 0]),
                integerParameters : this.x.model.ipar,
                interfaceFunctionName: "ANDBLK",
                interfaceFunctionName: "CFSCOPE",
                interfaceFunctionName: "CMSCOPE",
                interfaceFunctionName: "CONST_m",
                realParameters : this.x.model.rpar,
                result += c[i] + ",";
                result += c[i][0] + ";";
                simulationFunctionName: "cfscope",
                simulationFunctionName: "cmscope",
                simulationFunctionName: "cstblk4",
                simulationFunctionName: "csuper",
                simulationFunctionType: "C_OR_FORTRAN",
                simulationFunctionType: "C_OR_FORTRAN",
                simulationFunctionType: "C_OR_FORTRAN",
                simulationFunctionType: "DEFAULT",
                style: "ANDBLK",
                style: "CFSCOPE",
                style: "CMSCOPE",
                style: "CONST_m",
                this["data" + i + j] = new data();
                this["data" + i + j] = new data();
                this["data" + i + j] = new data();
                this["data" + i + j].column = j;
                this["data" + i + j].column = j;
                this["data" + i + j].column = j;
                this["data" + i + j].line = i;
                this["data" + i + j].line = i;
                this["data" + i + j].line = i;
                this["data" + i + j].realPart = array[i][j];
                this["data" + i + j].value = array[i][j].toString();
                this["data" + i + j].value = array[i][j];
                to: new ScilabDouble([1, 1, 1])
                to: new ScilabDouble([1, 2, 1])
                to: new ScilabDouble([3, 1, 1])
                to: new ScilabDouble([5, 1, 1])
                to: new ScilabDouble([5, 1, 1])
                to: new ScilabDouble([6, 1, 1])
                xx: new ScilabDouble([161], [234], [234]),
                xx: new ScilabDouble([169], [214], [214]),
                xx: new ScilabDouble([234], [234]),
                xx: new ScilabDouble([234], [361], [361]),
                xx: new ScilabDouble([262.57], [322.43]),
                xx: new ScilabDouble([351], [351], [450]),
                yy: new ScilabDouble([131.29], [93], [93]),
                yy: new ScilabDouble([163], [167]),
                yy: new ScilabDouble([275.78], [198.71]),
                yy: new ScilabDouble([275.78], [275.78], [202.71]),
                yy: new ScilabDouble([297], [297], [198.71]),
                yy: new ScilabDouble([340], [340], [275.78]),
            [""]);
            [0],
            [1]);
            [sci2exp([])],
            [sci2exp([])],
            [sci2exp([])],
            [sci2exp(this.wdim)],
            [this.N],
            [this.N],
            [this.per.toString().replace(/,/g," ")],
            [this.per],
            [this.win],
            [this.win],
            [this.ymax.toString().replace(/,/g," ")],
            [this.ymax],
            [this.ymin.toString().replace(/,/g," ")],
            [this.ymin],
            andlog.graphics.flip = new ScilabBoolean([true]);
            andlog.graphics.orig = new ScilabDouble([194, 133]);
            andlog.graphics.pein = new ScilabDouble([4], [11]);
            andlog.graphics.pout = new ScilabDouble([9]);
            andlog.graphics.sz = new ScilabDouble([60,60]);
            console.log(...this.clrs);
            diagram.objs.push(andlog);
            diagram.objs.push(ifthel);
            diagram.objs.push(input_port1);
            diagram.objs.push(output_port);
            diagram.objs.push(scicos_link({
            diagram.objs.push(scicos_link({
            diagram.objs.push(scicos_link({
            diagram.objs.push(scicos_link({
            diagram.objs.push(scicos_link({
            diagram.objs.push(scicos_link({
            diagram.objs.push(split);
            else {
            for (j = 0; j < array[i].length; j++) {
            for (j = 0; j < array[i].length; j++) {
            for (j = 0; j < array[i].length; j++) {
            if(typeof c[i].length === 'undefined') {
            ifthel.graphics.flip = new ScilabBoolean([true]);
            ifthel.graphics.orig = new ScilabDouble([331, 137]);
            ifthel.graphics.pein = new ScilabDouble([12]);
            ifthel.graphics.peout = new ScilabDouble([8], [0]);
            ifthel.graphics.pin = new ScilabDouble([9]);
            ifthel.graphics.sz = new ScilabDouble([60, 60]);
            input_port1.graphics.exprs = new ScilabString(["1"]);
            input_port1.graphics.flip = new ScilabBoolean([true]);
            input_port1.graphics.orig = new ScilabDouble([149, 287]);
            input_port1.graphics.peout = new ScilabDouble([4]);
            input_port1.graphics.sz = new ScilabDouble([20, 20]);
            input_port1.model.ipar = new ScilabDouble([1]);
            input_port2.graphics.exprs = new ScilabString(["2"]);
            input_port2.graphics.flip = new ScilabBoolean([true]);
            input_port2.graphics.orig = new ScilabDouble([141, 330]);
            input_port2.graphics.peout = new ScilabDouble([6]);
            input_port2.graphics.sz = new ScilabDouble([20, 20]);
            input_port2.model.ipar = new ScilabDouble([2]);
            labBoolean([true]);
            model.blocktype = new ScilabString(["d"]);
            model.blocktype=new ScilabString(["c"]);
            model.blocktype=new ScilabString(["c"]);
            model.dep_ut = new ScilabBoolean([false, false]);
            model.dep_ut=new ScilabBoolean([true,false]);
            model.dep_ut=new ScilabBoolean([true,false]);
            model.evtin=new ScilabDouble([1]);
            model.evtin=new ScilabDouble([1]);
            model.in = new ScilabDouble();
            model.in =new ScilabDouble(...this.in1);
            model.in2 = new ScilabDouble();
            model.in2=new ScilabDouble([1],[1]);
            model.intyp=new ScilabDouble([1],[1]);
            model.ipar = new ScilabDouble([win],[this.in1.length],[N],...this.wpos,...this.wdim,...this.in1,this.clrs[0],this.clrs[1]);  
            model.ipar=new ScilabDouble([this.win],[1],[this.N],...this.clrs,...this.wpos,...this.wdim,[1],[1]);
            model.opar = list();
            model.out = new ScilabDouble([this.c.length]);
            model.out2 = new ScilabDouble([this.c.length]);
            model.rpar = new ScilabDouble(this.c);
            model.rpar=new ScilabDouble([0],...colon_operator(this.period),...colon_operator(this.yy));
            model.rpar=new ScilabDouble([0],[this.ymin],[this.ymax],[this.per]);
            model.sim = list(new ScilabString(["cstblk4"]), new ScilabDouble([4]));
            model.sim=list(new ScilabString(["cfscope"]),new ScilabDouble([4]));
            model.sim=list(new ScilabString(["cmscope"]),new ScilabDouble([4]));
            new_arr.push([array[j][i]]);
            output_port.graphics.exprs = new ScilabString(["1"]);
            output_port.graphics.flip = new ScilabBoolean([true]);
            output_port.graphics.orig = new ScilabDouble([450, 83]);
            output_port.graphics.pein = new ScilabDouble([8]);
            output_port.graphics.sz = new ScilabDouble([20, 20]);
            output_port.model.ipar = new ScilabDouble([1]);
            return details;
            return new BasicBlock(attribu
            return new BasicBlock(attributes);
            return new BasicBlock(attributes);
            return new BasicBlock(attributes);
            return options;
            return this.x;
            split.graphics.orig = new ScilabDouble([234, 275.78348]);
            split.graphics.pein = new ScilabDouble([6]);
            split.graphics.peout = new ScilabDouble([11], [12]);
            this.c = [arguments[2]["vec"]];
            this.clrs=[[1],[3],[5],[7],[9],[11],[13],[15]];
            this.clrs=[[1],[3],[5],[7],[9],[11],[13],[15]];
            this.in1=[[1],[1]];
            this.N=20;
            this.N=2;
            this.per=30;
            this.per=[[30],[30]];
            this.period=transpose(per);
            this.wdim=[[-1],[-1]];
            this.wdim=[[600],[400]];
            this.win=-1;
            this.win=-1;
            this.wpos=[[-1],[-1]];
            this.wpos=[[-1],[-1]];
            this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 2 -> 80
            this.x = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 2 -> 80
            this.x = scicos_block();
            this.x.graphics.gr_i = new ScilabDouble();
            this.x.graphics.pein = new ScilabDouble([0, 0]);
            this.x.graphics.peout = new ScilabDouble([0]);
            this.x.graphics.style = new ScilabString(["CFSCOPE"]);
            this.x.graphics.style = new ScilabString(["CMSCOPE"]);
            this.x.graphics.style = new ScilabString(["CONST_m"]);
            this.x.graphics.sz = new ScilabDouble([2, 2]);
            this.x.gui = new ScilabString(["ANDBLK"]);
            this.x.model.blocktype = new ScilabString(["h"]);
            this.x.model.dep_ut = new ScilabBoolean([false, false]);
            this.x.model.evtin = new ScilabDouble([1, 1]);
            this.x.model.evtout = new ScilabDouble([1]);
            this.x.model.firing = new ScilabBoolean([false]);
            this.x.model.rpar = diagram;
            this.x.model.sim = new ScilabString(["csuper"]);
            this.x= new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
            this.ymax=15;
            this.ymax=[[1],[5]];
            this.ymin=-15;
            this.ymin=[[-1],[-5]];
            this.yy=[...transpose(ymin),...transpose(ymax)];
            var  exprs=new ScilabString([this.clrs.toString().replace(/,/g, " ")],
            var  exprs=new ScilabString([this.in1.toString().replace(/,/g," ")],[this.clrs.toString().replace(/,/g, " ")],
            var andlog = ANDLOG_f("define");
            var attributes = {
            var attributes = {
            var attributes = {
            var attributes = {
            var diagram = scicos_diagram();
            var exprs = new ScilabString([sci2exp(this.c)]);
            var gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CFSCOPE\",sz(1),sz(2));"]),new ScilabDouble([8]));
            var gr_i = list(new ScilabString(["xstringb(orig(1),orig(2),\"CMSCOPE\",sz(1),sz(2));"]),new ScilabDouble([8]));
            var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CONST_m\",sz(1),sz(2));"]);
            var ifthel = IFTHEL_f("define");
            var input_port1 = CLKIN_f("define");
            var input_port2 = CLKIN_f("define");
            var model = scicos_model();
            var model=scicos_model();
            var model=scicos_model();
            var options = {vec:["Constant Value",this.c.toString()]};
            var output_port = CLKOUT_f("define");
            var split = CLKSPLIT_f("define");
            }
            }
            }
            }
            }
            }));
            }));
            }));
            }));
            }));
            }));
            };
            };
            };
            };
        // changed
        block.graphics.style = new ScilabString(["EVTDLY_c"]);
        blockType: "h",
        case "define":
        case "define":
        case "define":
        case "define":
        case "details":
        case "get":
        case "set":
        ct: new ScilabDouble([5, -1]),
        ct: new ScilabDouble([5, -1]),
        ct: new ScilabDouble([5, -1]),
        exprs: label
        for (i = 0; i < array.length; i++) {
        for (i = 0; i < array.length; i++) {
        for (i = 0; i < array.length; i++) {
        for(j = 0; j < array.length ; j++) {
        for(var i = 0; i < c.length; i++) {
        from: new ScilabDouble([2, 1, 0]),
        from: new ScilabDouble([3, 1, 0]),
        from: new ScilabDouble([3, 2, 0]),
        gr_i: gr_i,
        gr_i[1] = new ScilabDouble();
        gr_i[1] = new ScilabDouble([8]);
        graphics: graphics,
        gui: new ScilabString([arguments.callee.caller.name])
        interfaceFunctionName: "CLOCK_c",
        j = 0;
        j = 0;
        j = 0;
        model.blocktype=new ScilabString(["d"]);
        model.dep_ut=new ScilabBoolean([false,false]);
        model.evtin=new ScilabDouble([1]);
        model.evtout=new ScilabDouble([1]);
        model.firing=new ScilabDouble([ff]);
        model.outtyp = new ScilabDouble();
        model.rpar=new ScilabDouble([dt],[ff]);
        model.sim=list(new ScilabString(["evtdly4"]),new ScilabDouble([4]));
        model: model,
        pein = zeros(ncin);
        pein: pein,
        peout = zeros(ncout);
        peout: peout,
        pin = zeros(nin);
        pin: pin,
        port.list.push(arg[0][i]);
        pout = zeros(nout);
        pout: pout,
        result += "]";
        result = result.substring(0, result.length - 1);
        return "[]";
        return block;
        return c.toString();
        return result;
        simulationFunctionName: "csuper",
        simulationFunctionType: "DEFAULT",
        style: "CLOCK_c",
        sz: sz,
        this.height = array.length;
        this.height = array.length;
        this.height = array.length;
        this.ScilabList.push(arguments[i]);
        this.ScilabMList[arguments[0][j]] = arguments[i];
        this.ScilabTList[arguments[0][j]] = arguments[i];
        this.width = array[0].length;
        this.width = array[0].length;
        this.width = array[0].length;
        to: new ScilabDouble([1, 1, 1])
        to: new ScilabDouble([2, 1, 1])
        to: new ScilabDouble([3, 1, 1])
        var array = arguments;
        var array = arguments;
        var array = arguments;
        var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3,2 -> 80
        var dt=0.1;
        var exprs=new ScilabString([dt],[ff]);
        var ff=0.0;
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_c\",sz(1),sz(2));"]);
        var model=scicos_model();
        var result = "[";
        xx: new ScilabDouble([340], [340],[380.71]),
        xx: new ScilabDouble([380.71],[380.71],[340],[340]),
        xx: new ScilabDouble([380.71],[399]),
        yy: new ScilabDouble([172],[172]),
        yy: new ScilabDouble([172],[302],[302],[277.71]),
        yy: new ScilabDouble([226.29],[172],[172]),
        }
        }
        }
        }
        }
    // Style
    //changed
    //changed
    //changed
    block.graphics.in_style = new ScilabString(["ExplicitInputPort;align=left;verticalAlign=middle;spacing=10.0;rotation=0"]);	
    block.graphics.out_implicit = new ScilabString(["E"]);
    block.graphics.out_style = new ScilabString(["ExplicitOutputPort;align=right;verticalAlign=middle;spacing=10.0;rotation=0"]);
    block.graphics.style = new ScilabString(["ANDLOG_f"]);
    block.graphics.style = new ScilabString(["CLKIN_f"]);
    block.graphics.style = new ScilabString(["CLKOUT_f"]);
    block.graphics.style = new ScilabString(["CLKSPLIT_f"]);
    block.graphics.style = new ScilabString(["IFTHEL_f"]);
    diagram.objs.push(evtdly);
    diagram.objs.push(output_port);
    diagram.objs.push(scicos_link({
    diagram.objs.push(scicos_link({
    diagram.objs.push(scicos_link({
    diagram.objs.push(split);
    else if (c.length == 1)
    else {
    evtdly.doc = list(new ScilabString([cnt++]));
    evtdly.graphics.exprs=new ScilabString(["0.1"],["0.1"]);
    evtdly.graphics.pein=new ScilabDouble([6]);
    evtdly.graphics.peout = new ScilabDouble([4]);
    evtdly.graphics.peout=new ScilabDouble([3]);
    evtdly.model.evtin = new ScilabDouble([-1]);
    evtdly.model.evtout = new ScilabDouble([-1]);
    evtdly.model.firing=new ScilabDouble([0.1]);
    evtdly.model.rpar=new ScilabDouble([0.1],[0.1]);
    evtdly.model.uid = new ScilabString([cnt]);
    for (i = 0; i < arg[0].length; i++)
    for (var i = 0; i < arguments.length; i++) {
    for (var i = 1, j = 0; i < arguments.length; i++, j++) {
    for (var i = 1, j = 0; i < arguments.length; i++, j++) {
    for(i = 0; i < array[0].length ; i++) {
    gr_i = list(gr_i, new ScilabDouble([8]));
    if (arguments.length) {
    if (arguments.length) {
    if (arguments.length) {
    if (gr_i[1] == 0) {
    if (gr_i[1] == []) {
    if (ncin > 0) {
    if (ncout > 0) {
    if (nin > 0) {
    if (nout > 0) {
    if(c.length== 0)
    model.blocktype = new ScilabString(["d"]);
    model.blocktype = new ScilabString(["d"]);
    model.blocktype = new ScilabString(["d"]);
    model.blocktype = new ScilabString(["d"]);
    model.blocktype = new ScilabString(["l"]);
    model.dep_ut = new ScilabBoolean([false, false]);
    model.dep_ut = new ScilabBoolean([false, false]);
    model.dep_ut = new ScilabBoolean([false, false]);
    model.dep_ut = new ScilabBoolean([false, false]);
    model.dep_ut = new ScilabBoolean([true, false]);
    model.evtin = new ScilabDouble([-1]);
    model.evtin = new ScilabDouble([-1]);
    model.evtin = new ScilabDouble([-1]); // 1, 1 -> -1, -1
    model.evtin = new ScilabDouble([-1],[-1]) // 1, 1 -> -1, -1
    model.evtout = new ScilabDouble([-1]); // 1, 1 -> -1, -1
    model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
    model.evtout = new ScilabDouble([-1], [-1]) // 1, 1 -> -1, -1 inverse
    model.firing = new ScilabDouble();
    model.firing = new ScilabDouble();
    model.firing = new ScilabDouble([-1]);
    model.firing = new ScilabDouble([-1], [-1]); // inverse
    model.firing = new ScilabDouble([-1], [-1]); // inverse
    model.in = new ScilabDouble([1]);
    model.in2 = new ScilabDouble([1]);
    model.intyp = new ScilabDouble([-1]);
    model.ipar = new ScilabDouble([port]);
    model.ipar = new ScilabDouble([port]);
    model.nmode = new ScilabDouble([1]);
    model.nzcross = new ScilabDouble([1]);
    model.out = new ScilabDouble([1]);
    model.out2 = new ScilabDouble([1]); // null -> 1
    model.sim = list(new ScilabString(["ifthel"]), new ScilabDouble([-1]));
    model.sim = new ScilabString(["andlog"]);
    model.sim = new ScilabString(["input"]);
    model.sim = new ScilabString(["output"]);
    model.sim = new ScilabString(["split"]);
    output_port.doc = list(new ScilabString([cnt++]));
    output_port.graphics.exprs=new ScilabString(["1"]);
    output_port.graphics.flip=new ScilabBoolean([true]);
    output_port.graphics.orig=new ScilabDouble([399,162]);
    output_port.graphics.pein=new ScilabDouble([5]);
    output_port.graphics.sz=new ScilabDouble([20,20]);
    output_port.model.ipar=new ScilabDouble([1]);
    output_port.model.uid = new ScilabString([cnt]);
    return block;
    return block;
    return block;
    return block;
    return block;
    return mlist(block_type, this.Block, this.graphics, this.model, this.gui, this.doc);
    return mlist(diagram_type, this.diagram, this.props, this.objs, this.version, this.contrib);
    return mlist(graphics_type, this.graphics, this.orig, this.sz, this.flip, this.theta, this.exprs, this.pin, this.pout, this.pein, this.peout, this.gr_i, this.id, this.in_implicit, this.out_implicit, this.in_style, this.out_style, this.in_label, this.out_label, this.style);
    return mlist(link_type, this.Link, this.xx, this.yy, this.id, this.thick, this.ct, this.from, this.to);
    return mlist(model_type, this.model, this.sim, this.in, this.in2, this.intyp, this.out, this.out2, this.outtyp, this.evtin, this.evtout, this.state, this.dstate, this.odstate, this.ipar, this.rpar, this.opar, this.blocktype, this.firing, this.dep_ut, this.label, this.nzcross, this.nmode, this.equations, this.uid);
    return new BasicBlock(attributes);
    return new scicos_block(block_options);
    return new_arr;
    return port;
    return this.ScilabList;
    return this.ScilabTList;
    return tlist(options_type, this.scsopt, this.D3, this.Background, this.Link, this.ID, this.Cmap);
    return tlist(params_type, this.params, this.wpar, this.title, this.tol, this.tf, this.context, this.void1, this.options, this.void2, this.void3, this.doc);
    split.doc = list(new ScilabString([cnt++]));
    split.graphics.orig=new ScilabDouble([380.71066,172]);
    split.graphics.pein = new ScilabDouble([4]);
    split.graphics.pein=new ScilabDouble([3]);
    split.graphics.peout=new ScilabDouble([5],[6]);
    split.model.uid = new ScilabString([cnt]);
    switch (arguments[0]) {
    switch(arguments[0])
    switch(arguments[0])
    switch(arguments[0])
    this.angle = options.angle || "";
    this.Background = new ScilabDouble([8,1]);
    this.Block = new ScilabString(block_type);
    this.blockElementName = options.blockElementName || "";
    this.blockType = options.blockType || "";
    this.blocktype = options.blocktype || new ScilabString(["c"]);
    this.Cmap = new ScilabDouble([0.8, 0.8, 0.8]);
    this.column;
    this.connectable = options.connectable || "";
    this.context = options.context || new ScilabString([""]);
    this.contrib = options.contrib || list();
    this.ct = options.ct || new ScilabDouble([1, 1]);
    this.D3 = list(new ScilabBoolean([true]), new ScilabDouble([33]));
    this.dep_ut = options.dep_ut || new ScilabBoolean([false, false]);
    this.dependsOnT = options.dependsOnT || "";
    this.dependsOnU = options.dependsOnU || "";
    this.diagram = new ScilabString(diagram_type);
    this.doc = options.doc || list();
    this.doc = options.doc || list();
    this.dstate = options.dstate || new ScilabDouble();
    this.equations = list();
    this.equations = options.equations || list();
    this.evtin = options.evtin || new ScilabDouble();
    this.evtout = options.evtout || new ScilabDouble();
    this.exprs = options.exprs || "";
    this.exprs = options.exprs || new ScilabDouble();
    this.firing = options.firing || new ScilabDouble();
    this.flip = options.flip || new ScilabBoolean([true]);
    this.from = options.from || new ScilabDouble();
    this.gr_i = options.gr_i || new ScilabString();
    this.graphics = new ScilabString(graphics_type);
    this.graphics = options.graphics || new scicos_graphics();
    this.gui = options.gui || new ScilabString();
    this.ID = list(new ScilabDouble([5, 1]), new ScilabDouble([4, 1]));
    this.id = options.id || "";
    this.id = options.id || new ScilabString([""]);
    this.id = options.id || new ScilabString(["drawlink"]); // changed
    this.in = options.in || new ScilabDouble();
    this.in2 = options.in2 || new ScilabDouble();
    this.in_implicit = options.in_implicit || new ScilabDouble();
    this.in_label = options.in_label || new ScilabDouble();
    this.in_style = options.in_style || new ScilabDouble();
    this.integerParameters = options.integerParameters || new ScilabDouble();
    this.interfaceFunctionName = options.interfaceFunctionName || "";
    this.intyp = options.intyp || new ScilabDouble(); // [1]
    this.ipar = options.ipar || new ScilabDouble();
    this.label = options.label || new ScilabString([""]); // If label not available, use image
    this.line;
    this.Link = new ScilabDouble([1, 5]);
    this.Link = new ScilabString(link_type);
    this.model = new ScilabString(model_type);
    this.model = options.model || new scicos_model();
    this.nbZerosCrossing = new ScilabDouble([0]);
    this.nmode = new ScilabDouble([0]);
    this.nmode = options.nmode || new ScilabDouble([0]);;
    this.nzcross = options.nzcross || new ScilabDouble([0]);
    this.objectsParameters = list();
    this.objs = options.objs || list();
    this.oDState = list();
    this.odstate = options.odstate || list();
    this.opar = options.opar || list(); // new ScilabDouble();
    this.options = options.options || new default_options();
    this.ordering = options.ordering || "";
    this.orig = options.orig || new ScilabDouble([0, 0]);
    this.out = options.out || new ScilabDouble();
    this.out2 = options.out2 || new ScilabDouble();
    this.out_implicit = options.out_implicit || new ScilabDouble(); // There is only one!
    this.out_label = options.out_label || new ScilabDouble();
    this.out_style = options.out_style || new ScilabDouble();
    this.outtyp = options.outtyp || new ScilabDouble([1]);
    this.params = new ScilabString(params_type);
    this.parent = options.parent || "";
    this.pein = options.pein || new ScilabDouble();
    this.peout = options.peout || new ScilabDouble();
    this.pin = options.pin || new ScilabDouble();
    this.pout = options.pout || new ScilabDouble();
    this.props = options.props || scicos_params();
    this.realParameters = options.realParameters || "";
    this.realPart;
    this.rpar = options.rpar || new ScilabDouble();
    this.ScilabList = [];
    this.ScilabMList = {};
    this.ScilabMList.scilabClass = "ScilabMList";
    this.ScilabMList.varName = "";
    this.ScilabTList = {};
    this.ScilabTList.scilabClass = "ScilabTList";
    this.scsopt = new ScilabString(options_type);
    this.sim = options.sim || new ScilabString();
    this.simulationFunctionName = options.simulationFunctionName || "";
    this.simulationFunctionType = options.simulationFunctionType || "";
    this.state = options.state || new ScilabDouble();
    this.style = options.style || "";
    this.style = options.style || new ScilabString();
    this.sz = options.sz || new ScilabDouble([80, 80]); // Space and comma works the same!
    this.tf = options.tf || new ScilabDouble([100000]);
    this.theta = options.theta || new ScilabDouble([0]);
    this.thick = options.thick || new ScilabDouble([0, 0]);
    this.title = options.title || options.Title || new ScilabString(["Untitled"]);
    this.to = options.to || new ScilabDouble();
    this.tol = options.tol || new ScilabDouble([Math.pow(10, -6)], [Math.pow(10, -6)], [Math.pow(10, -10)], [100001], [0], [1], [0]);
    this.uid = options.uid || new ScilabString();
    this.value = options.value || "";
    this.value;
    this.version = options.version || new ScilabString([""]);
    this.vertex = options.vertex || "";
    this.visible = options.visible || "";
    this.void1 = new ScilabDouble();
    this.void2 = new ScilabDouble();
    this.void3 = new ScilabDouble();
    this.wpar = options.wpar || new ScilabDouble([600, 450, 0, 0, 600, 450]);
    this.x.graphics.gr_i=new ScilabString([]);
    this.x.graphics.peout=new ScilabDouble([0]);
    this.x.graphics.sz=new ScilabDouble([2,2]);
    this.x.gui=new ScilabString(["CLOCK_c"]);
    this.x.model.blocktype=new ScilabString(["h"]);
    this.x.model.dep_ut=new ScilabBoolean([false, false]);
    this.x.model.evtout=new ScilabDouble([1]);
    this.x.model.firing=new ScilabBoolean([false]);
    this.x.model.rpar=diagram;
    this.x.model.sim=new ScilabString(["csuper"]);
    this.xx = options.xx || new ScilabDouble(); //inverse array
    this.yy = options.yy || new ScilabDouble(); //inverse array
    var arg = new Array(n + 1).join("0").split("").map(parseFloat);
    var array = arguments[0];
    var attributes = {
    var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
    var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 1 -> 80
    var block = new standard_define(new ScilabDouble([80, 80]), model, exprs, gr_i); // 3 -> 80
    var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 1 -> 80
    var block = new standard_define(new ScilabDouble([80, 80]), model, new ScilabDouble(), gr_i); // 3 -> 80
    var block_options = {
    var block_type = ["Block", "graphics", "model", "gui", "doc"];
    var diagram=scicos_diagram();
    var diagram_type = ["diagram", "props", "objs", "version", "contrib"];
    var exprs = new ScilabString(["1"], ["1"]); // value model.in, model.nmode inverse
    var exprs = ScilabString(["" + port]);
    var exprs = ScilabString(["" + port]);
    var gr_i = arguments[3] || new ScilabString();
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ANDLOG_f\",sz(1),sz(2));"]);
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKIN_f\",sz(1),sz(2));"]);
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKOUT_f\",sz(1),sz(2));"]);
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKSPLIT_f\",sz(1),sz(2));"]);
    var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"IFTHEL_f\",sz(1),sz(2));"]);
    var graphics = new scicos_graphics(graphics_options);
    var graphics_options = {
    var graphics_type = ["graphics", "orig", "sz", "flip", "theta", "exprs", "pin", "pout", "pein", "peout", "gr_i", "id", "in_implicit", "out_implicit", "in_style", "out_style", "in_label", "out_label", "style"];
    var i , j;
    var i = 0,
    var i = 0,
    var i = 0,
    var i = 0;
    var label = arguments[2];
    var link_type = ["Link", "xx", "yy", "id", "thick", "ct", "from", "to"];
    var model = arguments[1];
    var model = scicos_model();
    var model = scicos_model();
    var model = scicos_model();
    var model = scicos_model();
    var model = scicos_model();
    var model_type = ["model", "sim", "in", "in2", "intyp", "out", "out2", "outtyp", "evtin", "evtout", "state", "dstate", "odstate", "rpar", "ipar", "opar", "blocktype", "firing", "dep_ut", "label", "nzcross", "nmode", "equations", "uid"];
    var ncin = model.evtin.length;
    var ncout = model.evtout.length;
    var new_arr = [];
    var nin = model.in.length;
    var nout = model.out.length;
    var options = arguments[0] || new Object();
    var options = arguments[0] || new Object();
    var options = arguments[0] || new Object();
    var options = arguments[0] || new Object();
    var options = arguments[0] || new Object();
    var options = arguments[0] || new Object();
    var options = arguments[0];
    var options_type = ["scsopt", "3D", "Background", "Link", "ID", "Cmap"];
    var output_port=CLKOUT_f("define");
    var params_type = ["params", "wpar", "title", "tol", "tf", "context", "void1", "options", "void2", "void3", "doc"];
    var pein = new ScilabDouble();
    var peout = new ScilabDouble();
    var pin = new ScilabDouble();
    var port = 1;
    var port = 1;
    var port = new ScilabDouble();
    var pout = new ScilabDouble();
    var split=CLKSPLIT_f("define");
    var sz = arguments[0];
    var x=scicos_block();
    {
    {
    {
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }));
    }));
    }));
    };
    };
    };
*/
/*
// All arrays - separated by ',' or ';' or ' ' are taken to be 1 Dimensional
// Good read: http://javascript.info/tutorial/arguments#keyword-arguments
// Only during printing, their nomenclature will change
// Returns ScilabDouble which contains a list with size = n and all values = 0
Authors: Adhitya, Nimish, Chhavi
function ANDBLK() {
function ANDLOG_f() {
function BasicBlock() {
function CFSCOPE() {
function CLKIN_f() {
function CLKOUT_f() {
function CLKSPLIT_f() {
function CMSCOPE()
function colon_operator()
function CONST_m() {
function data() {
function default_options() {
function EVTDLY_c() {
function IFTHEL_f() {
function list() {
function mlist() {
function sci2exp(c) {
function scicos_block() {
function scicos_diagram() {
function scicos_graphics() {
function scicos_link() {
function scicos_model() {
function scicos_params() {
function ScilabBoolean() {
function ScilabDouble() {
function ScilabString() {
function standard_define() {
function tlist() {
function transpose(a)
function zeros(n) {
return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
var cnt = 8;
{
{
{
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}