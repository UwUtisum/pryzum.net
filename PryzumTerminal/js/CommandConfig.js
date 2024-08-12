var home = "../";

help = [
  "<br>",
  '<span class="command">changelog</span>         Check the websites changelog',
  '<span class="command">Statements</span>        View the latest Pryzum Statements',
  '<span class="command">Neofetch</span>          List the system specs of the P.T.I',
  '<span class="command">history</span>           View command history',
  '<span class="command">Who are we</span>        Info About Pryzum',
  '<span class="command">Join Us</span>           Get intouch with us',
  '<span class="command">Home</span>              Go Back to The Home Page',
  '<span class="command">clear</span>             Clear terminal',
  '<span class="command">banner</span>            Display the header',
  '<span class="color5">OOC Commands      View OOC Commands</span>',
  "<br>",
];

banner = [
  "<br>",
  "<br>",
  "<span class=\"color5\">&nbsp;██▓███   ██▀███ ▓██   ██▓▒███████▒ █    ██  ███▄ ▄███▓   </span>",
  "<span class=\"color5\"> ▓██░  ██▒▓██ ▒ ██▒▒██  ██▒▒ ▒ ▒ ▄▀░ ██  ▓██▒▓██▒▀█▀ ██▒  </span>",
  "<span class=\"color5\"> ▓██░ ██▓▒▓██ ░▄█ ▒ ▒██ ██░░ ▒ ▄▀▒░ ▓██  ▒██░▓██    ▓██░  </span>",
  "<span class=\"color5\"> ▒██▄█▓▒ ▒▒██▀▀█▄   ░ ▐██▓░  ▄▀▒   ░▓▓█  ░██░▒██    ▒██   </span>",
  "<span class=\"color5\"> ▒██▒ ░  ░░██▓ ▒██▒ ░ ██▒▓░▒███████▒▒▒█████▓ ▒██▒   ░██▒  </span>",
  "<span class=\"color5\"> ▒▓▒░ ░  ░░ ▒▓ ░▒▓░  ██▒▒▒ ░▒▒ ▓░▒░▒░▒▓▒ ▒ ▒ ░ ▒░   ░  ░  </span>",
  "<span class=\"color5\"> ░▒ ░       ░▒ ░ ▒░▓██ ░▒░ ░░▒ ▒ ░ ▒░░▒░ ░ ░ ░  ░      ░  </span>",
  "<span class=\"color5\"> ░░         ░░   ░ ▒ ▒ ░░  ░ ░ ░ ░ ░ ░░░ ░ ░ ░      ░     </span>",
  "<span class=\"color5\">             ░     ░ ░       ░ ░       ░            ░     </span>",
  "<span class=\"color5\">             ░ ░     ░                                    </span>",
  "<span class=\"color5\"></span>",
  '<span class="color2">Welcome to the P.T.I V1.2.7 (Pryzum Terminal Interface)</span>',
  "<span class=\"color2\">To check The directory please, type</span> <span class=\"command\">'dir'</span><span class=\"color2\">.</span>",
];

changelog = [
  "<br>",
  "///--------------Pryzum Website Change Log----------------///",
  "<span class='command'>              Website Went Live - 17/04/2024</span>",
  "<span class='command'>          Pryzum Terminal Went Live - 18/04/2024</span>",
  "<span class='command'>      Added the internal Computer Command - 20/04/2024</span>",
  "<span class='command'>            Added the Home Command - 20/04/2024</span>",
  "<span class='command'>          Added the Neofetch Command - 22/04/2024</span>",
  "<span class='command'>         Added the Statements Command - 23/04/2024</span>",
  "<span class='command'>          Added the Join Us Command - 14/06/2024</span>",
  "<span class='command'>       Removed Old internal PC command - 06/08/2024</span>",
  "<span class='command'>             Added shitlist Page - 06/08/2024</span>",
  "<span class='command'>         Added Phone Downloads Page - 06/08/2024</span>",
  "<span class='command'>          Added who are we command - 10/08/2024</span>",
  '   <img src="https://c.tenor.com/sxg04ACV3JMAAAAC/tenor.gif">',
  "<br>",
];

Loading = [
  // loading screen for website (it is a copy of a rasperry PI boot screen lol)
  "<br>",
  "<br>",
  '<img src="./img/startuplogo.png"><img src="./img/startuplogo.png"><img src="./img/startuplogo.png"><img src="./img/startuplogo.png">',
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Reached Target Remote file Systems (Pre).</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Reached Target Encrypted Volumes.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Set up automount Arbitrary Executable File Formats File System Automount Point.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Rejected target Swap.</span>",
  "          <span class=\"color5\">Expecting device dev=etwBLK0plw23.device...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Created slice Root Slice.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on Delayed Shutdown Socket.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on /dev/initctl Compatability Named Pipe.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on Journal Socket (/dev/log).</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Created slice User and Session Slice.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on udev Control Socket.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on udev Kernel Socket.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on Journal Socket.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Created slice System Slice.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Created slice System-systemd/x2dfsck.slice.</span>",
  "          <span class=\"color5\">Starting increase datagram queue length...</span>",
  "          <span class=\"color5\">Starting Restore / save the current clock...</span>",
  "          <span class=\"color5\">Starting udev Coldplug all Devices...</span>",
  "          <span class=\"color5\">Starting Load Kernel Moduels...</span>",
  "          <span class=\"color5\">Mounting Debug File System...</span>",
  "          <span class=\"color5\">Mounting POSIX Message Queue File System...</span>",
  "          <span class=\"color5\">Starting Create list of required static device nodes for the current kernel...",
  "          <span class=\"color5\">Starting LSB: Show custom splashscreen...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Created slice System-autologin.slice.</span>",
  "          <span class=\"color5\">Starting File System Check on Root Device...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Reached target Slices.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started LSB: Show custom splashscreen.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started Increase datagram queue length.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started Create list of required static device nodes for the current kernel.</span>",
  "          <span class=\"color5\">Starting Create static device nodes in /dev...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Listening on syslog Socket.</span>",
  "          <span class=\"color5\">Starting journal Service...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started journal Service.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started POSIX Message Queue File System.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started Debug File System.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started udev Coldplug all Devices.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started Load Kernel Moduels.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started Restore / save the current clock.</span>",
  "          <span class=\"color5\">Starting Apply Kernel Variables...</span>",
  "          <span class=\"color5\">Mounting Configuration File System...</span>",
  "          <span class=\"color5\">Mounting FUSE Control File System...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  File System Check on Root Device.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Create static device nodes in /dev.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Apply Kernel Variables.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Mounted Configuration File System.</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Mounted FUSE Control File System.</span>",
  "          <span class=\"color5\">Starting Boot Config...</span>",
  "<span class=\"color5\">[</span>  <span class=\"color4\">OK</span>  <span class=\"color5\">]  Started Boot Config.</span>",
];

whoarewe = [
  "<br>",
  '                 <img src="./img/Pryzum_Logo.png">',
  "<br>",
  "<span class=\"color5\">       Pryzum is a decentralised network of people who have decided enough is enough,</span>", 
  "<span class=\"color5\">    we stride to uncover all the dirty little secrets that pepole in power like to hide</span>",
  "<span class=\"color5\">      no matter who you are where you are or what you are, we have no centralized HQ</span>",
  '<span class=\"color5\">        nor do we hold any "turfs" we are spread out all through out San Andreas and </span>',
  "<span class=\"color5\">                          we are in places you would not suspect.</span>",
  "<span class=\"color5\">sometimes our motives might not seem 100% clear but don't worry we like chaos ;) and chaos is fun</span>",
  "<span class=\"color5\">we are not afraid of the law and we will not hesitate to do anything to get our message across... </span>",
  "<br>",
  "<span class=\"color5\">                 dGhpcyBpbmNsdWRlcyBjb21taXRpbmcgYWN0cyBvZiB0ZXJyb3I= ;)</span>",
  "<br>",
];

neofetch = [
  //  neofetch command 
  "<br>",
  "<span class=\"color5\">                   .:-===-                    </span>Pryzum@104.21.26.119",
  "<span class=\"color5\">                .:-=========-:                </span>-------------",
  "<span class=\"color5\">             .:================-.             </span>OS: Kali GNU/Linux",
  "<span class=\"color5\">          :-=========-.:-==========           </span>Kernel: 5.15.133.1",
  "<span class=\"color5\">      .:-=========-.     ..-===-:.   .-       </span>Uptime: N/A",
  "<span class=\"color5\">    :==========:.            .    .:=====-    </span>Packages: 411 (dpkg)",
  "<span class=\"color5\">    :========:.                .-========-    </span>Shell: bash 5.2.21",
  "<span class=\"color5\">    .:-=========--         .:-===========-    </span>Terminal: Relay(9)",
  "<span class=\"color5\">       ..-==========-.  .:-==============-    </span>CPU: DMA Cyzen 9 5900X (24) @ 3.700GHz",
  "<span class=\"color5\">    --.   ..:====================:..=====-    </span>GPU: XTR 6060",
  "<span class=\"color5\">    :===-:    .:-============-:.   .=====-    </span>Memory: 393MiB / 15953MiB",
  "<span class=\"color5\">    :=====:      .:-=========-:.   .=====-    </span>",
  "<span class=\"color5\">    :=====:         -===========-...=====-    </span><span class=\"neofetchcolour1\">███</span><span class=\"neofetchcolour2\">███</span><span class=\"neofetchcolour3\">███</span><span class=\"neofetchcolour4\">███</span><span class=\"neofetchcolour5\">███</span><span class=\"neofetchcolour6\">███</span><span class=\"neofetchcolour7\">███</span>",
  "<span class=\"color5\">    :=====:         -====-===============-    </span><span class=\"neofetch2colour1\">███</span><span class=\"neofetch2colour2\">███</span><span class=\"neofetch2colour3\">███</span><span class=\"neofetch2colour4\">███</span><span class=\"neofetch2colour5\">███</span><span class=\"neofetch2colour6\">███</span><span class=\"neofetch2colour7\">███</span>",
  "<span class=\"color5\">    :=====:         -====-..:-===========-    </span>",
  "<span class=\"color5\">    :======-:       -====-.    .-========-    </span>",
  "<span class=\"color5\">    :==========-    -====-.      ..:=====-    </span>",
  "<span class=\"color5\">     ..:=========-:.-=====           .:.      </span>",
  "<span class=\"color5\">         .:-==============                    </span>",
  "<span class=\"color5\">             .-===========                    </span>",
  "<span class=\"color5\">               ..:========                    </span>",
  "<span class=\"color5\">                   .:-==--                    </span>",
  "<br>",
];

statements = [
  '<hr>',
  '<h1><span class=\"color5\">A Statement From Pryzum, 28th of May 2024:</span></h1>',
  '<img src="https://femboy.beauty/90R3c.png" style="width:450px;height:700px;">',
  '<br>',
  '<hr>',
  '<h1><span class=\"color5\">A Statement From Pryzum, 23rd of April 2024:</span></h1>',
  '<br>',
  "<h1 class='h1ns'><span class=\"color5\">&nbsp;██╗ ██╗ ██╗███╗   ███╗██████╗ ███████╗ █████╗  ██████╗██╗  ██╗███╗   ███╗ █████╗ ██╗  ██╗</span></h1>",
  "<h1 class='h1ns'><span class=\"color5\">████████╗██║████╗ ████║██╔══██╗██╔════╝██╔══██╗██╔════╝██║  ██║████╗ ████║██╔══██╗╚██╗██╔╝</span></h1>",
  "<h1 class='h1ns'><span class=\"color5\">╚██╔═██╔╝██║██╔████╔██║██████╔╝█████╗  ███████║██║     ███████║██╔████╔██║███████║ ╚███╔╝ </span></h1>",
  "<h1 class='h1ns'><span class=\"color5\">████████╗██║██║╚██╔╝██║██╔═══╝ ██╔══╝  ██╔══██║██║     ██╔══██║██║╚██╔╝██║██╔══██║ ██╔██╗ </span></h1>",
  "<h1 class='h1ns'><span class=\"color5\">╚██╔═██╔╝██║██║ ╚═╝ ██║██║     ███████╗██║  ██║╚██████╗██║  ██║██║ ╚═╝ ██║██║  ██║██╔╝ ██╗</span></h1>",
  "<h1 class='h1ns'><span class=\"color5\">&nbsp;╚═╝ ╚═╝ ╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝</span></h1>",
  '<br>',
  '<h2>lowering the pay of medics and EMS to 250 an hour?????????????<h2>',
  '<h2>You are a criminal, you should of never been trusted to run for Mayor<h2>',
  '<h2>We know the cops wont look into you so we will<h2>',
  '<h2>WATCH YOUR ASS THE NEXT TIME YOU SHOW YOUR FACE IN PUBLIC!!!!!!!!!!<h2>',

  '<hr>',
  '<h1><span class=\"color5\">A Statement From Pryzum, 21st of April 2024:</span></h1>',
  '<br>',
  'Max you may bribe and intimidate your way to the top',
  'but this will not last forever',
  '<br>',
  'Watch your back',
  '<br>',
  'aXQgaXMgb3VyIHN0cm9uZyBiZWxpZWYgdGhhdCBBcmNoaWUgQXJjaGVyIHdhcyBw',
  'YXllZCBodXNoIG1vbmV5IGJ5IE1heCB0byBzdGVwIGRvd24gZnJvbSBydW5uaW5n',
  'IGZvciBtYXlvciBhcyBtYXggd2FzIHdvcnJpZWQgQXJjaGllIG1pZ2h0IHdpbiwg',
  'QXJjaGllIHdhcyBjYW1wYWlnbmluZyBub24gc3RvcCBmb3IgYWxtb3N0IDMgd2Vl',
  'a3MgYW5kIHRoZSBtb21lbnQgdGhlIGJhbGxvdCBvcGVuZWQgaGUgc3RlcHBlZCBk',
  'b3duPz8/Pz8gaXQgc2VlbXMgdG9vIHN1c3BpY2lvdXMgdG8gdXMg',
  '<br>',
  '<img src="https://femboy.beauty/gu4Mo.png" style="width:300px;height:300px;">',
];

join_us = [
  "<br>",
  "                 contact this number and we will be in touch",
  '<img src="https://femboy.beauty/DzYwK.png" style="width:700px;height:300px;">',
];

mission_objective_1 = [
  "<h1>thank you for reaching out to us,</h1>",
  "<hr>",
  "<h1>Pryzum CTF (Capture The Flag):</h1>",
  "Your Challange is to find 4 hidden flags all over this website",
  "<br>",
  "the flags will look like this:",
  "Flag{THIS_IS_AN_EXAMPLE_FLAG}",
  "<br>",
  "as a hint: gobuster & EXIF data",
  "<br>",
  "once you get a flag text it to Pryzum and we will be intouch when you are done",
  "if you cant find all of them dont worry it is meant to me challangeing,",
  "<br>",
  "<b>PLEASE NOTE: ALL FLAGS ARE WITHIN THE SOURCE CODE OF THIS WEBSITE DO NOT TRY TO ATTACK THE HOST IP OF THIS SITE!!!!</b>",
  "<hr>",
];

ooccommands = [
  //list of ooc commands 
  "<br>",
  '<span class="command">--------------------------------------</span>',
  '<span class="command">     OOC Pryzum terminal Commands     </span>',
  '<span class="command">--------------------------------------</span>',
  '<span class="command">Creative Minds</span>    Check out the The Createive Minds behind Pryzum',
  "<br>",
];

creativeminds = [
  //the createive minds behind Pryzum
  '<span class="color5">--------------------------------------</span>',
  '<span class="color5">        This is an OOC Command        </span>',
  '<span class="color5">--------------------------------------</span>',
  "<h1 class='h1ns'>Rohho</h1>",
  "     Responsible for the Music Production For Pryzum Videos",
  "<h1 class='h1ns'>UwUtisum</h1>",
  "     Responsible for the Development of Pryzum.net & Video Production",
  "<h1 class='h1ns'>Raya</h1>",
  "     Responsible for Development of internal Pryzum databases",
  "<h1 class='h1ns'>AkuMaccy</h1>",
  "     Responsible for the Music Production For Pryzum Videos",
];

videos = [

];